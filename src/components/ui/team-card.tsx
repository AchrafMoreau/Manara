"use client"

import { useState } from "react"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  bio: string
  linkedin : string
}

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative h-[400px]  overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex justify-between items-center border-b">
            <div className="info">
                <h3 className="text-xl font-bold relative z-10">{member.name}</h3>
                <p className="text-sm opacity-90 relative z-10 mb-2">{member.position}</p>
            </div>
            <div className="netwok ">
                <Link href={member.linkedin} passHref>
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl"/>
                </Link>
            </div>

        </div>

        <div
          className={`
            overflow-hidden transition-all duration-500 relative z-10
            ${isHovered ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="text-sm text-white/90 mt-2 leading-relaxed">{member.bio}</p>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>
      </div>
    </Card>
  )
}

