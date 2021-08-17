const regulars = {
    firstName: /^.{3,}$/,
    lastName: /^.{3,}$/,
    email: /^\S{3,}@\S{2,}\.\D{2,}/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
};

export default regulars;