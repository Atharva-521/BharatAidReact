

const generateRandomAvatar = () => {
    const randomSeed = Math.random().toString(36).substring(7);
    const url = `https://api.dicebear.com/7.x/adventurer/svg?seed=${randomSeed}`
    return url
}

export default generateRandomAvatar;