interface DocsApiProps {
  method: string
  endpoint: string
}

export function DocsApi({ method, endpoint }: DocsApiProps) {
  return (
    <div className="bg-fd-primary/10 flex w-fit items-center gap-x-3 rounded-lg px-3 py-1.5">
      <span className="font-mono text-sm">{method}</span>
      <span className="bg-fd-primary/50 size-1" />
      <span className="text-fd-primary font-mono text-sm">{endpoint}</span>
    </div>
  )
}
