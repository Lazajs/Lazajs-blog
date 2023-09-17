export const getAge = (birth: string) => { // YYYY-MM-DD
    const actualDate = new Date()
    const birthDate = new Date(birth)

    const age = actualDate.getFullYear() - birthDate.getFullYear()

    if (
      birthDate.getMonth() > actualDate.getMonth() ||
      (birthDate.getMonth() === actualDate.getMonth() &&
        birthDate.getDate() > actualDate.getDate()) 
    ) {
      return age - 1
    }

    return age
  }