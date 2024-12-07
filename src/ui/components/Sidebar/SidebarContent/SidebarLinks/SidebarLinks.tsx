import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import styled from 'styled-components'
import { NAVIGATION_LINKS } from '../../helpers/navigation-links'

const NestedLinkContainer = styled.span`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.gray['300']};

  padding-left: ${({ theme }) => theme.spacing.sm};
  margin-left: ${({ theme }) => theme.spacing.sm};
`

export function SidebarLinks() {
  return (
    <>
      {NAVIGATION_LINKS.map((link) => (
        <Fragment key={link.name}>
          <Link to={link.href}>{link.name}</Link>

          <NestedLinkContainer>
            {link?.children?.map((child) => (
              <Link key={child.name} to={child.href}>
                {child.name}
              </Link>
            ))}
          </NestedLinkContainer>
        </Fragment>
      ))}
    </>
  )
}
