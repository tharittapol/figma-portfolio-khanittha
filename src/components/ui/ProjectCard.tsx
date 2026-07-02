import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import Tag from './Tag'
import IconButton from './IconButton'
import { ArrowRight } from './icons'
import { cn } from '../../lib/cn'

interface ProjectCardProps {
  project: Project
  className?: string
  /** taller image area for the 2-col featured cards */
  featured?: boolean
}

/**
 * Vertical project card (Figma "Project Card", 41:5030): full-bleed mockup image,
 * category / title / description, footer with tags + arrow. The whole card links
 * to the case study.
 */
export default function ProjectCard({ project, className, featured }: ProjectCardProps) {
  return (
    <Link
      to={project.route}
      className={cn(
        'group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-card',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'relative w-full overflow-hidden bg-[#d9d9d9]',
          featured ? 'aspect-[548/336]' : 'aspect-[363/208]',
        )}
      >
        <img
          src={project.cardImage}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 px-6 pb-6 pt-5">
        <span className="text-body-sm font-semibold uppercase tracking-[0.04em] text-text-secondary">
          {project.category}
        </span>
        <h3 className="text-heading font-semibold tracking-tighter-2 text-text-primary">
          {project.title}
          {project.status === 'in-process' && ' (In process)'}
        </h3>
        <p className="text-body text-text-secondary">{project.description}</p>

        {/* Footer */}
        <div className="mt-auto flex items-end justify-between gap-4 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <IconButton icon={ArrowRight} label={`View ${project.title}`} decorative />
        </div>
      </div>
    </Link>
  )
}
