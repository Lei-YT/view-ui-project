import Mock from 'mockjs'
const Random = Mock.Random

Mock.mock('/api/login','post', (req, res) => {
    return Mock.mock({
        'user': Random.cname(),
        'token':Random.string('lower', 35)
    })
})
