const validate = (state, setState) => {
  const { article } = state;
  const errors = {};
  for (let param in article) {
    switch (param) {
      case "title":
        {
          const val = article[param].match(/.{1,}/);
          if (!val) errors[param] = "Данное поле обязательно";
        }
        break;
      case "description":
        {
          const val = article[param].match(/.{1,}/);
          if (!val) errors[param] = "Данное поле обязательно";
        }
        break;
      // case 'maidIn': {}
      // break
      // case 'category': {}
      // break;
      case "edition":
        {
          const val = article[param] < 1800;
          if (val === true) errors[param] = "Да это же антиквариат...";
        }
        break;
      case "price":
        {
          const val = article[param] > 0;
          if (!val) errors[param] = "Значение цены отрицательно";
        }
        break;
    }
  }
  if (errors.length > 0) {
    setState({ ...state, errors, isValid: false });
  } else {
    setState({ ...state, errors, isValid: true });
  }
};

export default validate;
