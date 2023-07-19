/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'http://openweathermap.org',
                port: '',
                pathname: 'img/wn/**',
            },
        ],
    },
}

module.exports = nextConfig
