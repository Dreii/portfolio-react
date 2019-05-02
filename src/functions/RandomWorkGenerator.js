import {iRandomRange, randomInArray} from './helpers'

const RandomWorkGenerator = () => {
  let numberOfProjects = iRandomRange(3, 6)
  let projects = []

  let nameList = ['Project One', 'Project Two',' Word App', 'Wordswap', 'Workplace', 'Inventory', 'ChatMap', 'Website', 'Phone App']
  let imageList = ['/blog-proto.png', '/greece-app-proto.png', '/map-app-proto-2.png', '/map-app-proto.png', '/social-app-proto.png']
  let tagList = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Design', 'NodeJS', 'Socket.io'],
      tagsArray = []
      for(let i=0; i<3;i++){tagsArray.push(randomInArray(tagList))}
  // let buttonTextList = ['View', '']

  for(let i=0; i < numberOfProjects; i++){
    projects.push({
      name: randomInArray(nameList),
      image: '/portfolio-images'+randomInArray(imageList),
      tags: tagsArray,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus dolor nisl, non sodales turpis lacinia et. Curabitur iaculis orci ut dolor dignissim porttitor. Duis convallis sollicitudin sem, faucibus venenatis mi laoreet sed. Etiam sit amet magna a purus sollicitudin molestie. Vivamus quis ullamcorper tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac nunc ligula. Mauris iaculis sem nec risus placerat, vitae pellentesque dolor blandit. Fusce scelerisque nibh sit amet risus convallis congue. Duis magna neque, tempus a magna non, tempus interdum felis. Maecenas tempor lacus eget finibus aliquam. Donec placerat non est at dignissim. Aliquam erat volutpat. Sed in eros varius diam vulputate viverra. Aliquam rutrum consequat velit, quis venenatis ex convallis ac."
    })
  }

  return projects
}

export default RandomWorkGenerator()
