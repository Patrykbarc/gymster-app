import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../../ui/components/Button/Button'
import { Card } from '../../../ui/components/Card/Card'
import { Flex } from '../../../ui/components/Flex/Flex'
import { FormTitle } from '../../../ui/components/Form/FormTitle/FormTitle'
import { Input } from '../../../ui/components/Input/Input'
import { Label } from '../../../ui/components/Label/Label'
import { Select } from '../../../ui/components/Select/Select'

const ProfileContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  height: fit-content;
`

const FormGroup = styled.div`
  margin-bottom: 15px;
`

const GENDER_OPTIONS = ['Male', 'Female', 'Other']

// const schema = z.object({
//   firstName: z.string().min(2),
//   lastName: z.string().min(2),
//   gender: z.enum(GENDER_OPTIONS as [string, ...string[]]),
//   birthDate: z.string().min(3),
//   email: z.string().email(),
// })

// type ProfileFormData = z.infer<typeof schema>

export function Profile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    email: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <ProfileContainer>
      <FormTitle>Profile Settings</FormTitle>
      <form onSubmit={handleSubmit}>
        <Flex $gap="0.75rem">
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Flex>
        <FormGroup>
          <Label htmlFor="gender">Gender</Label>
          <Select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
            required
            options={GENDER_OPTIONS}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="birthDate">Birth Date</Label>
          <Input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Save Changes</Button>
      </form>
    </ProfileContainer>
  )
}
