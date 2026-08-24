import { NextResponse } from 'next/server'

const FALLBACK_WEATHER = {
  temp: '28°C',
  location: 'Kolkata',
  icon: '01d',
}

export async function GET() {
  // Keep the provider key on the server. The public name remains a temporary
  // fallback so existing deployments continue working until their env var moves.
  const apiKey = process.env.OPENWEATHER_API_KEY ?? process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

  if (!apiKey) {
    return NextResponse.json(FALLBACK_WEATHER)
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=22.5726&lon=88.3639&units=metric&appid=${apiKey}`,
      { next: { revalidate: 600 } },
    )

    if (!response.ok) throw new Error('Weather data fetch failed')

    const data = await response.json()
    return NextResponse.json(
      {
        temp: `${Math.round(data.main.temp)}°C`,
        location: 'Kolkata',
        icon: data.weather[0]?.icon ?? FALLBACK_WEATHER.icon,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=86400',
        },
      },
    )
  } catch {
    return NextResponse.json(FALLBACK_WEATHER)
  }
}
