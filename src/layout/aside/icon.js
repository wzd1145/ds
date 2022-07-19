export const iconPath = (icon) => {
  // console.log('icon', icon)
  if (icon.indexOf('-') === -1) {
    // console.log('icon111', icon[0].toUpperCase() + icon.substr(1))
    return icon[0].toUpperCase() + icon.substr(1)
  } // if (icon.indexOf('-') === icon.lastIndexOf('-')) {

  if (icon.indexOf('-') === icon.lastIndexOf('-')) {
    // console.log('icon222', icon[0].toUpperCase() + icon.substring(1, [icon.indexOf('-')]) + icon[icon.indexOf('-') + 1].toUpperCase() + icon.substring([icon.indexOf('-') + 2]))
    return (
      icon[0].toUpperCase() +
      icon.substring(1, [icon.indexOf('-')]) +
      icon[icon.indexOf('-') + 1].toUpperCase() +
      icon.substring([icon.indexOf('-') + 2])
    )
  } else {
    // console.log(icon)
    const str1 =
      icon[0].toUpperCase() +
      icon.substring(1, [icon.indexOf('-')]) +
      icon[icon.indexOf('-') + 1].toUpperCase() +
      icon.substring([icon.indexOf('-') + 2]) // console.log('str1', str1)

    if (str1.indexOf('-') === str1.lastIndexOf('-')) {
      // console.log('str2', str1[0].toUpperCase() + str1.substring(1, [str1.indexOf('-')]) + str1[str1.indexOf('-') + 1].toUpperCase() + str1.substring([str1.indexOf('-') + 2]))
      return (
        str1[0].toUpperCase() +
        str1.substring(1, [str1.indexOf('-')]) +
        str1[str1.indexOf('-') + 1].toUpperCase() +
        str1.substring([str1.indexOf('-') + 2])
      )
    }
  }
}
