import { render } from '@testing-library/react';
// 앱의 기본 로딩 화면이 렌더링되는지 확인하는 회귀 테스트입니다.
import { expect, test } from 'vitest';
import App from './App';

test('renders the home route loading state', () => {
  render(<App />);

  expect(document.getElementById('loading')).toBeInTheDocument();
});
