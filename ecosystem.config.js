module.exports = {
  apps: [
    {
      name: "cnpcloud",
      cwd: "/var/www/cnpcloud",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 48517",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};