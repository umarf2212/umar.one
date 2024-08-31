import { Container } from './Container'

const technologies = [
  { technology: 'JavaScript(ES6+)', icon: 'javascript' },
  { technology: 'TypeScript', icon: 'typescript' },
  { technology: 'NodeJS', icon: 'nodejs' },
  { technology: 'HTML5', icon: 'html5' },
  { technology: 'CSS', icon: 'css3' },
  { technology: 'Python', icon: 'python' },
  { technology: 'SQL', icon: 'mysql' },
  { technology: 'Webpack', icon: 'webpack' },
]

const TechStack = () => {
  return (
    <Container className="mt-24 md:mt-28">
      <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Tech Stack I use
      </h2>
      <ul className="justify-left mt-8 flex flex-wrap gap-6">
        {technologies.map((technology) => (
          <li
            key={technology.technology}
            className="flex flex-col items-center"
          >
            <span className="sr-only">{technology.technology}</span>
            <div className="h-16 w-16 overflow-hidden rounded-full border border-zinc-200 p-2 dark:border-zinc-700">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${technology.icon}/${technology.icon}-original.svg`}
                alt={technology.technology}
                className="h-full w-full object-contain p-2"
              />
            </div>
            <p className="pt-4 text-center text-zinc-500 dark:text-zinc-400">
              {technology.technology}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default TechStack
