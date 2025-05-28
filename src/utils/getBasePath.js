const getBasePath = (type) => {
  switch (type) {
    case 'freelancer':
      return '/freelancers';
    case 'employer':
      return '/employers';
    case 'admin':
      return '/admin';
    default:
      return '/users'; // fallback
  }
};

const basePath = getBasePath(user?.userType);
