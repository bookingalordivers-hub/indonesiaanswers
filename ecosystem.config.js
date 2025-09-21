module.exports = {
  apps: [{
    name: 'indonesia-answers',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_file: '/home/user/webapp/logs/combined.log',
    out_file: '/home/user/webapp/logs/out.log',
    error_file: '/home/user/webapp/logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss'
  }]
}
