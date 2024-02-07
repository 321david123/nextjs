/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // it should be false by default ,
    images: {
        domains: ['ruedatec.com'],
    },
}

module.exports = nextConfig
