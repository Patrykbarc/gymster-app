import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import styled from 'styled-components'
import { NAVIGATION_LINKS } from '../../helpers/navigation-links'

const NestedLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.gray['300']};
  gap: ${({ theme }) => theme.spacing.sm};
`

const NestedLink = styled(Link)`
  margin-left: 1rem;
`

export function SidebarLinks() {
  return (
    <>
      {NAVIGATION_LINKS.map((link) => (
        <Fragment key={link.name}>
          <Link to={link.href}>{link.name}</Link>

          <div>
            {link?.children?.map((child) => (
              <NestedLink key={child.name} to={child.href}>
                {child.name}
              </NestedLink>
            ))}
          </div>
        </Fragment>
      ))}
    </>
  )
}
