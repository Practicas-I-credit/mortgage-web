import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="not-found">
      <div id="not-found-content">
        <span id="not-found-code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" id="not-found-btn">Back to Home</Link>
      </div>
    </main>
  )
}