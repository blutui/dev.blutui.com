import { getDocuments } from 'utils/content'

export default function Document({ params }: { params: { slug: string[] } }) {
  let document = getDocuments()
  console.log(document)

  return <div className="text-zinc-500">{params.slug.join('/')}</div>
}
