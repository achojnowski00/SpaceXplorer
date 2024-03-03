import { renderHook, act } from '@testing-library/react';

import useToggle from '.';

describe('useToggle', () => {
  const INITIAL_HOOK_TRUE_STATE = true;
  const INITIAL_HOOK_FALSE_STATE = false;

  describe('initialState', () => {
    it('should return state equal true when true value is passed', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_TRUE_STATE), {
        initialProps: {},
      });

      expect(result.current[0]).toBe(INITIAL_HOOK_TRUE_STATE);
    });

    it('should return state equal false when false value is passed', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_FALSE_STATE), {
        initialProps: {},
      });

      expect(result.current[0]).toBe(INITIAL_HOOK_FALSE_STATE);
    });
  });

  describe('useToggle setTrue', () => {
    it('should set state to true when current state is false and setState function is called', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_FALSE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].setTrue();
      });

      expect(result.current[0]).toBe(true);
    });

    it('should set state to true when current state is true and setState function is called', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_TRUE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].setTrue();
      });

      expect(result.current[0]).toBe(true);
    });
  });

  describe('useToggle setFalse', () => {
    it('should set state to false when current state is true and setState function is called', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_TRUE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].setFalse();
      });

      expect(result.current[0]).toBe(false);
    });

    it('should set state to false when current state is false and setState function is called', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_FALSE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].setFalse();
      });

      expect(result.current[0]).toBe(false);
    });
  });

  describe('useToggle toggle', () => {
    it('should set state to false when current state is true and setState function is called', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_TRUE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(false);
    });

    it('should set state to true when current state is false and setState function is called', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_FALSE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(true);
    });

    it('should return initial state when toggle is called twice', () => {
      const { result } = renderHook(() => useToggle(INITIAL_HOOK_TRUE_STATE), {
        initialProps: {},
      });

      act(() => {
        result.current[1].toggle();
        result.current[1].toggle();
      });

      expect(result.current[0]).toBe(INITIAL_HOOK_TRUE_STATE);
    });
  });
});
