.unique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

/* Card Base */
.unique-card {
  position: relative;
  background: linear-gradient(135deg, #0f172a, #111827); /* dark blue-gray gradient */
  border-radius: 2rem;
  box-shadow:
    0 8px 15px rgba(20, 184, 166, 0.3),
    inset 0 0 15px rgba(20, 184, 166, 0.2);
  overflow: hidden;
  padding: 2rem 2.5rem;
  color: #d1d5db;
  cursor: default;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.unique-card:hover {
  transform: translateY(-12px) rotate(-2deg);
  box-shadow:
    0 15px 25px rgba(20, 184, 166, 0.5),
    inset 0 0 25px rgba(20, 184, 166, 0.3);
}

/* Asymmetric pseudo elements for style */
.unique-card::before,
.unique-card::after {
  content: "";
  position: absolute;
  border-radius: 2rem;
  opacity: 0.25;
  transition: opacity 0.3s ease;
}

.unique-card::before {
  top: -40px;
  left: -40px;
  width: 100px;
  height: 140px;
  background: #14b8a6; /* teal */
  transform: rotate(25deg);
  filter: blur(40px);
  z-index: 0;
}

.unique-card::after {
  bottom: -50px;
  right: -50px;
  width: 140px;
  height: 100px;
  background: #0ea5e9; /* blue */
  transform: rotate(-25deg);
  filter: blur(35px);
  z-index: 0;
}

.unique-card:hover::before,
.unique-card:hover::after {
  opacity: 0.45;
}

/* Content inside card */
.unique-card .content {
  position: relative;
  z-index: 1;
}

.unique-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #14b8a6; /* teal */
  margin-bottom: 0.5rem;
}

.unique-card span {
  font-style: italic;
  color: #6b7280; /* gray-500 */
  display: block;
  margin-bottom: 1rem;
}

.unique-card p,
.unique-card a {
  font-size: 1rem;
  color: #d1d5db; /* gray-300 */
  line-height: 1.4;
  text-decoration: none;
}

.unique-card a:hover {
  text-decoration: underline;
  color: #0ea5e9; /* bright blue on hover */
}

/* Different base colors for awards vs certs for subtle difference */

.unique-award::before {
  background: #14b8a6; /* teal */
}

.unique-award::after {
  background: #047857; /* darker green */
}

.unique-cert::before {
  background: #0ea5e9; /* bright blue */
}

.unique-cert::after {
  background: #0369a1; /* darker blue */
}

/* Responsive tweak */
@media (max-width: 480px) {
  .unique-card {
    padding: 1.5rem 1.8rem;
  }

  .unique-card h3 {
    font-size: 1.2rem;
  }
}
