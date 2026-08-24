"use client"

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

let posthogPromise: Promise<(typeof import("posthog-js"))["default"]> | undefined

function loadPostHog() {
  if (!posthogPromise) {
    posthogPromise = import("posthog-js").then(({ default: posthog }) => {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

      if (key && host) {
        posthog.init(key, {
          api_host: host,
          capture_pageview: false,
          capture_pageleave: true,
        })
      }

      return posthog
    })
  }

  return posthogPromise
}

export function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return

    const capturePageView = () => {
      void loadPostHog().then((posthog) => {
        const search = searchParams.toString()
        const url = `${window.origin}${pathname}${search ? `?${search}` : ""}`
        posthog.capture("$pageview", { "$current_url": url })
      })
    }

    if ("requestIdleCallback" in window) {
      const callbackId = window.requestIdleCallback(capturePageView, { timeout: 2000 })
      return () => window.cancelIdleCallback(callbackId)
    }

    const timeoutId = window.setTimeout(capturePageView, 1000)
    return () => window.clearTimeout(timeoutId)
  }, [pathname, searchParams])

  return null
}
