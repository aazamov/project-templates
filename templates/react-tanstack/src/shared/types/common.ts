export type BaseResponse<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T
}

export type BaseError<T> = {
  status: number
  detail: string
  data: T
}

export type SvgProps = React.SVGProps<SVGSVGElement>

export type PropsWithClassName = {
  className?: string
}
