"use client"

import { useState, useEffect } from "react"
import { formatDistanceToNow, format, isValid, parseISO } from "date-fns"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface RelativeTimeProps {
  date: string | Date | number
  tooltipFormat?: string
  className?: string
}

export function RelativeTime({ date, tooltipFormat = "PPpp", className = "" }: RelativeTimeProps) {
  const [relativeTime, setRelativeTime] = useState<string>("")
  const [fullTimestamp, setFullTimestamp] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      try {
        let dateObj: Date

        if (typeof date === "string") {
          // Try to parse ISO string or regular date string
          dateObj = date.includes("T") ? parseISO(date) : new Date(date)
        } else if (typeof date === "number") {
          dateObj = new Date(date)
        } else {
          dateObj = date
        }

        if (isValid(dateObj)) {
          setRelativeTime(formatDistanceToNow(dateObj, { addSuffix: true }))
          setFullTimestamp(format(dateObj, tooltipFormat))
        } else {
          setRelativeTime("Unknown")
          setFullTimestamp("Invalid date")
        }
      } catch (error) {
        console.error("Error formatting date:", error)
        setRelativeTime("Unknown")
        setFullTimestamp("Invalid date")
      }
    }

    updateTime()

    // Update every minute to keep relative time current
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [date, tooltipFormat])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`cursor-help underline decoration-dotted ${className}`}>{relativeTime}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{fullTimestamp}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
