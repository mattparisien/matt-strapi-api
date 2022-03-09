module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fc8af80ad51a146790da142f52ceab4'),
  },
});
