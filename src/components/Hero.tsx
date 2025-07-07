"use client"

import Image from 'next/image'
import { LinkText } from './LinkText'
import { Mail, Github } from 'lucide-react'
import { useState } from 'react'
import basicInfo from '@/data/basic.json'

export function Hero() {
  const [showCopied, setShowCopied] = useState(false)

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(basicInfo.mail)
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  return (
    <div className="mx-auto w-full max-w-[1084px] px-4 py-8 md:grid md:grid-cols-12 md:gap-5 md:px-0 md:py-16">
      {/* One column gap at start - desktop only */}
      <div className="hidden md:block md:col-span-1" />

      {/* Mobile layout */}
      <div className="flex flex-col md:hidden gap-8">
        {/* Two-column layout for intro section on mobile */}
        <div className="flex flex-row gap-4 items-start">
          {/* Welcome paragraph - 75% width */}
          <div className="w-3/4">
            <p className="text-base text-gray-600">
              Yo! I&apos;m Adarsh and this is my world (apneduniya). I think some crazy ideas and build them. Sometimes when I get bored, I write some random stuffs.
            </p>
          </div>

          {/* Image - 25% width */}
          <div className="w-1/4 aspect-square relative">
            <Image
              src="/ag-hero.jpg"
              alt={basicInfo.name}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Rest of mobile content */}
        <div className="space-y-8">
          {/* Summary section */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
            <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
              <li>
                Currently I&apos;m taking care of users at{' '}
                <LinkText
                  variant="single-image-link"
                  text="Composio"
                  href="https://composio.dev/"
                  images={{ src: "/logos/composio.png", alt: "Composio" }}
                  withBorder
                />
              </li>
              <li>
                Previously I was fixing the UI for{' '}
                <LinkText
                  variant="single-image-link"
                  text="Xade Finance"
                  href="https://x.com/xade_xyz"
                  images={{ src: "/logos/xadefinance.jpg", alt: "Xade Finance" }}
                  withBorder
                />
                as an intern
              </li>
              <li>
                I&apos;ve worked for 10+ companies since 2023
              </li>
              <li>
                In my free time, I contribute back to the community by {' '}
                <LinkText
                  variant="image-stack"
                  text=""
                  images={[
                    { src: "/logos/h4b.jpg", alt: "Hack4Bengal" },
                    { src: "/logos/superteamin.jpg", alt: "Superteam" },
                    { src: "/logos/takshila.jpeg", alt: "Takshila" },
                  ]}
                />
              </li>
              <li>18 years old, based in Kolkata</li>
            </ul>
          </div>

          {/* Social and Music section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 w-full">
              <a
                href={`mailto:${basicInfo.mail}`}
                onClick={handleEmailClick}
                className="group relative text-gray-400 hover:text-gray-600"
              >
                <Mail className="h-5 w-5" />
                {showCopied && (
                  <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                    Copied
                  </div>
                )}
              </a>
              <a
                href={basicInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="/x.svg"
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="[&>path]:fill-gray-100 hover:[&>path]:fill-gray-600"
                />
              </a> 
              <a
                href={basicInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* Divider */}
              <div className="h-4 w-px bg-gray-200" />

              {/* Music section - inline with social icons */}
              <div className="group flex items-center gap-2 text-gray-600 flex-1 min-w-0">
                <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                  <div className="overflow-hidden rounded-full flex-shrink-0">
                    <Image
                      src="/cd.png"
                      alt="Album Art"
                      width={24}
                      height={24}
                      className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                    />
                  </div>
                  <span className="text-sm">
                    ♪ Listening to{' '}
                    <span className="inline-flex max-w-[80px] sm:max-w-none overflow-hidden">
                      <LinkText
                        variant="text-link"
                        text={basicInfo.listening.songName}
                        href={basicInfo.listening.link}
                      />
                      <span className="truncate"> by {basicInfo.listening.artist}</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - Main content - 7 columns */}
      <div className="hidden md:block md:col-span-7 space-y-12">
        {/* Welcome paragraph */}
        <p className="text-base text-gray-600">
          Yo! I&apos;m Adarsh and this is my space (apneduniya). <br />
          I think some crazy ideas and build them. Sometimes when I get bored,  <br />
          I write some random stuffs.
        </p>

        {/* Summary section */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
          <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
            <li>
              Currently I&apos;m taking care of users at{' '}
              <LinkText
                variant="single-image-link"
                text="Composio"
                href="https://composio.dev/"
                images={{ src: "/logos/composio.png", alt: "Composio" }}
                withBorder
              />
            </li>
            <li>
              Previously I was fixing the UI for{' '}
              <LinkText
                variant="single-image-link"
                text="Xade Finance"
                href="https://x.com/xade_xyz"
                images={{ src: "/logos/xadefinance.jpg", alt: "Xade Finance" }}
                withBorder
              />
              as an intern
            </li>
            <li>
              I&apos;ve worked for 10+ companies since 2023
            </li>
            <li>
              In my free time, I contribute back to the community by {' '}
              <LinkText
                variant="image-stack"
                text=""
                images={[
                  { src: "/logos/h4b.jpg", alt: "Hack4Bengal" },
                  { src: "/logos/superteamin.jpg", alt: "Superteam" },
                  { src: "/logos/takshila.jpeg", alt: "Takshila" },
                ]}
              />
            </li>
            <li>18 years old, based in Kolkata</li>
          </ul>
        </div>

        {/* Social and Music section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${basicInfo.mail}`}
              onClick={handleEmailClick}
              className="group relative text-gray-400 hover:text-gray-600"
            >
              <Mail className="h-5 w-5" />
              {showCopied && (
                <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                  Copied
                </div>
              )}
            </a>
            <a
              href={basicInfo.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <Image
                src="/x.svg"
                alt="X (Twitter)"
                width={20}
                height={20}
                className="[&>path]:fill-gray-100 hover:[&>path]:fill-gray-600"
              />
            </a>
            <a
              href={basicInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-gray-200" />

          {/* Music section */}
          <div className="group flex items-center gap-2 text-gray-600">
            <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
              <div className="overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src="/cd.png"
                  alt="Album Art"
                  width={24}
                  height={24}
                  className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                />
              </div>
              <span className="text-sm">
                ♪ Listening to{' '}
                <LinkText
                  variant="text-link"
                  text={`${basicInfo.listening.songName} by ${basicInfo.listening.artist}`}
                  href={basicInfo.listening.link}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image - 3 columns */}
      <div className="hidden md:block md:col-span-3">
        <Image
          src="/ag-hero.jpg"
          alt={basicInfo.name}
          width={400}
          height={400}
          className="rounded-lg"
          priority
        />
      </div>

      {/* One column gap at end - desktop only */}
      <div className="hidden md:block md:col-span-1" />
    </div>
  )
} 