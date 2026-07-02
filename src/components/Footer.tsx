import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Three.js.</p>
    </footer>
  )
}
