export const required = (value) => !!value || '此字段为必填项';

export const email = (value) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !value || pattern.test(value) || '请输入有效的邮箱地址';
};

export const minLength = (min) => (value) => {
  return !value || value.length >= min || `最少需要 ${min} 个字符`;
};

export const maxLength = (max) => (value) => {
  return !value || value.length <= max || `最多允许 ${max} 个字符`;
};