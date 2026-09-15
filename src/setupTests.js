import { expect } from 'vitest';
// Vitest에서 Testing Library의 DOM 전용 검증 함수를 사용할 수 있게 설정합니다.
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);