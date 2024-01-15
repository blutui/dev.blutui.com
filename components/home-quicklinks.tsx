import { Card } from '@/components/card'

import {
  AcademicCap,
  AtSymbol,
  BookOpen,
  Microphone,
  Sparkles,
  Video,
} from '@/components/icons'

export default function HomeQuicklinks() {
  return (
    <div className="mx-auto mt-6 grid max-w-8xl gap-6 px-8 lg:grid-cols-6">
      <div className="md:col-span-3">
        <Card
          title="Read the docs"
          href="/docs/getting-started/create"
          icon={<BookOpen />}
        >
          Learn how to get set up and start building your first project.
        </Card>
      </div>
      <div className="md:col-span-3">
        <Card title="Guides" href="/guides" icon={<AcademicCap />}>
          Find a guide on how to develop with Blutui.
        </Card>
      </div>
      <div className="md:col-span-3">
        <Card
          title="What's new in Blutui"
          href="/changelog"
          icon={<Sparkles />}
        >
          {`See what's been added, changed, fixed or removed.`}
        </Card>
      </div>
      <div className="md:col-span-3">
        <Card
          title="YouTube tutorials"
          href="https://www.youtube.com/@useBlutui"
          icon={<Video />}
        >
          Watch developer tutorials on our YouTube channel.
        </Card>
      </div>
      <div className="md:col-span-3">
        <Card
          title="Discord"
          href="https://discord.gg/4H8dZW6Fva"
          icon={<Microphone />}
        >
          Join the community of Blutui developers on Discord.
        </Card>
      </div>
      <div className="md:col-span-3">
        <Card
          title="Blutui on X"
          href="https://x.com/blutui"
          icon={<AtSymbol />}
        >
          Follow us for product updates, tips and more.
        </Card>
      </div>
    </div>
  )
}
