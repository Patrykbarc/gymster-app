import { Trash2 } from 'lucide-react'

import { Fragment } from 'react/jsx-runtime'
import { Button } from '../../../../../ui/components/Button/Button'
import { Input } from '../../../../../ui/components/Input/Input'
import { SetField } from '../../../../../ui/views/WorkoutForm/ExerciseFields/SetsFields/SetField/SetField'
import { FieldsContainer } from '../../../../../ui/views/WorkoutForm/ExerciseFields/SetsFields/SetsFields'
import { useAppDispatch } from '../../../../../utils/hooks/useAppDispatch'
import { updateSet } from '../../../../../utils/redux/slices/workouts/actions'
import { ExercisesListProps, Title } from '../ExercisesList/ExercisesList'

export function EditForm({ exercises }: ExercisesListProps) {
  const dispatch = useAppDispatch()

  return exercises?.exercises.map((e) => (
    <div key={e.id}>
      <Title>{e.name}</Title>
      <form>
        <FieldsContainer>
          {e.sets.map((s, index) => (
            <Fragment key={s.id}>
              <SetField isFirstIndex={false} set={index} />

              <Input
                defaultValue={s.reps}
                type="number"
                onChange={(e) =>
                  dispatch(
                    updateSet({
                      setId: s.id,
                      field: { name: 'reps', value: +e.target.value },
                    })
                  )
                }
              />

              <Input
                type="number"
                defaultValue={s.weight}
                onChange={(e) =>
                  dispatch(
                    updateSet({
                      setId: s.id,
                      field: { name: 'weight', value: +e.target.value },
                    })
                  )
                }
              />
              <Button type="button" $variant="outline">
                <Trash2 />
              </Button>
            </Fragment>
          ))}
        </FieldsContainer>
      </form>
    </div>
  ))
}
