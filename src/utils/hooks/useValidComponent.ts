import { Children, ElementType, isValidElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
  types: ElementType[]
}

/**
 * Custom hook that filters and returns valid child elements based on their types.
 * It checks if the provided children are valid React elements and match the specified types.
 * If an invalid element is found, an error is logged to the console.
 *
 * @param children - The child components passed to a parent component.
 * @param types - An array of valid React component types (e.g., DialogTitle, DialogDescription).
 * @returns An object containing `validChildren`, which are the filtered valid React elements.
 *
 * @example
 * const { validChildren } = useValidComponent(children, [DialogTitle, DialogDescription]);
 */
export function useValidComponent(
  children: Props['children'],
  types: Props['types']
) {
  const validChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (types.includes(child.type as ElementType)) {
        return child
      }
    }
    console.error('Invalid child component passed to DialogHeader')
    return null
  })

  return { validChildren }
}
