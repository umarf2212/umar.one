import { Button } from '@/components/Button'
import Role from '@/components/homepage/Role'
import BriefcaseIcon from '@/components/homepage/BriefcaseIcon'
import ArrowDownIcon from '@/components/homepage/ArrowDownIcon'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
// import resumeData from '@/data/resume.json'
export default function Resume() {
  let resume = [
    {
      company: 'BT Group',
      title: 'Frontend Engineer',
      logo: logoPlanetaria,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: 'present',
      },
    },
    {
      company: 'Wipro Limited',
      title: 'Project Engineer - React',
      logo: logoAirbnb,
      start: '2019',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
