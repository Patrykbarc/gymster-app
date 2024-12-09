import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSegment } from '../../../../../utils/hooks/useSegment'
import { isLinkActive } from '../../helpers/isLinkActive'
import { NAVIGATION_LINKS } from '../../helpers/navigation-links'

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  .active {
    background-color: ${({ theme }) => theme.colors.gray['200']};
  }

  .link {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }

  .nested-link {
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${({ theme }) => theme.colors.gray['300']};

    margin-left: ${({ theme }) => theme.spacing.md};
  }
`

export function SidebarLinks() {
  const { currentPath } = useSegment()

  return NAVIGATION_LINKS.map((link) => (
    <LinkContainer key={link.name}>
      <Link
        className={`link ${isLinkActive(link.href, currentPath) ? 'active' : ''}`}
        to={link.href}
      >
        {link.icon && <link.icon size={17} />} {link.name}
      </Link>

      <div className="nested-link">
        {link?.children?.map((child) => (
          <Link
            className={`link ${isLinkActive(child.href, currentPath) ? 'active' : ''}`}
            key={child.name}
            to={child.href}
          >
            {child.name}
          </Link>
        ))}
      </div>
    </LinkContainer>
  ))
}
