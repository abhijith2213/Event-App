export const Footer = () => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <footer>
      <p>© {year} Time to Code - A Project Built with Next.js</p>
    </footer>
  )
}
