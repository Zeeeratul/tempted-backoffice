function getConfig(env) {
  return {
    name: "Mon projet",
    sessionSecret: "endivesJambon",
    useMysql2: true,
    auth: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    mysql: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database:
        env === "staging"
          ? process.env.MYSQL_DATABASE_STAGING
          : process.env.MYSQL_DATABASE_PRODUCTION,
    },
    views: [
      {
        type: "table",
        label: "Auth",
        tableName: "Auth",
        columns: [
          {
            label: "Id",
            name: "id",
          },
          {
            label: "Email",
            name: "email",
          },
          {
            label: "Type",
            name: "type",
          },
        ],
      },
      {
        type: "table",
        label: "UserProfile",
        tableName: "UserProfile",
        columns: [
          {
            label: "Id",
            name: "id",
          },
          {
            label: "Firstname",
            name: "firstname",
          },
          {
            label: "StripeCustomerId",
            name: "stripeCustomerId",
          },
          {
            label: "DefaultMessage",
            name: "defaultMessage",
          },
        ],
      },
      {
        type: "table",
        label: "ProviderProfile",
        tableName: "ProviderProfile",
        columns: [
          {
            label: "Id",
            name: "id",
          },
          {
            label: "Firstname",
            name: "firstname",
          },
          {
            label: "Lastname",
            name: "lastname",
          },
          {
            label: "Birthdate",
            name: "birthdate",
          },
          {
            label: "Gender",
            name: "gender",
          },
          {
            label: "Avatar",
            name: "avatarKey",
            publicPath:
              "https://lazo-assets-staging.s3.eu-west-3.amazonaws.com/",
            dataType: "file",
          },
          {
            label: "Description",
            name: "description",
          },
          {
            label: "HairColor",
            name: "hairColor",
          },
          {
            label: "Service1Price",
            name: "service1Price",
          },
          {
            label: "Service2Price",
            name: "service2Price",
          },
          {
            label: "InstagramUsername",
            name: "instagramUsername",
          },
          {
            label: "InstagramFollowers",
            name: "instagramFollowers",
          },
          {
            label: "StripeAccountId",
            name: "stripeAccountId",
          },
          {
            label: "Currency",
            name: "currency",
          },
          {
            label: "Verified",
            name: "verified",
          },
          {
            label: "Disabled",
            name: "disabled",
          },
        ],
      },
      {
        type: "table",
        label: "ProviderLanguage",
        tableName: "ProviderLanguage",
        columns: [
          {
            label: "Id",
            name: "id",
          },
          {
            label: "Language",
            name: "language",
          },
        ],
      },
      {
        type: "table",
        label: "ProviderGenderTargetted",
        tableName: "ProviderGenderTargetted",
        columns: [
          {
            label: "Id",
            name: "id",
          },
          {
            label: "Gender",
            name: "gender",
          },
        ],
      },
    ],
  };
}

module.exports = getConfig;
