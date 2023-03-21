type ButtonInterface = {
  label: string
  onKlik: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
}

export function Button(props: ButtonInterface) {
  const kliknuo = (e: React.MouseEvent<HTMLElement>) => {
      props.onKlik(e)
  }

  return <button
    style={{ margin: 3, color: "blue" }}
    className={props.className}
    aria-label={props.label}
    onClick={kliknuo}>
      {props.label}
  </button>
}