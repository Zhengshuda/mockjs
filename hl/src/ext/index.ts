import idCard from './idCard';
import phone from './phone';

export default {
  setup: () => {
    const exts = [idCard, phone];
    exts.forEach(ext => {
      ext();
    });
  },
};
