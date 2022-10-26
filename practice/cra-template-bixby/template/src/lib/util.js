export const log = (...args) => console.log(...args);
export const logError = (...args) => console.error(...args);
export const renderIf = (test, component) => (test ? component : undefined);
export const classToggler = options => Object.keys(options).filter(key => !!options[key]).join(' ');

export const userValidation = async (props, navigate) => {
    try {
      if (!props.userAuth) {
        const token = localStorage.getItem('Boilerplate-Template-Token');
        if (token) {
          await props.tokenSignIn(token);
          await props.userProfileFetch();
        } else {
            navigate('/');
        }
      }
    } catch (err) {
      return navigate('/');
    }
  };