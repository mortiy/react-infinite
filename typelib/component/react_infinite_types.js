type PreloadType = number | {
  type: string,
  amount: number
};
type ElementHeight = number | Array<number>;

type CSSStyle = {[key: string]: string | number};

type ReactInfiniteUtilityFunctions = {
  subscribeToScrollListener: () => void,
  unsubscribeFromScrollListener: () => void,
  nodeScrollListener: (e: SyntheticEvent) => void,
  getScrollTop: () => number,
  scrollShouldBeIgnored: (e: SyntheticEvent) => boolean,
  buildScrollableStyle: () => CSSStyle
};

type ReactInfiniteProvidedDefaultProps = {
  handleScroll: () => any,

  useWindowAsScrollContainer: boolean,

  onInfiniteLoad: () => any,
  loadingSpinnerDelegate: ReactElement<any, any, any>,

  isInfiniteLoading: boolean,
  timeScrollStateLastsForAfterUserScrolls: number,

  className: string
}

type ReactInfiniteProps = {
  children: any,
  handleScroll?: (event: any) => any,

  preloadBatchSize?: PreloadType,
  preloadAdditionalHeight?: PreloadType,

  elementHeight: ElementHeight,
  containerHeight: number,
  useWindowAsScrollContainer?: boolean,

  infiniteLoadBeginBottomOffset?: number,
  onInfiniteLoad?: () => any,
  loadingSpinnerDelegate?: ReactElement<any, any, any>,

  isInfiniteLoading?: boolean,
  timeScrollStateLastsForAfterUserScrolls?: number,

  className?: string
};

type ReactInfiniteComputedProps = {
  children: any,
  handleScroll?: (event: any) => any,

  preloadBatchSize: number,
  preloadAdditionalHeight: number,

  elementHeight: ElementHeight,
  containerHeight: number,
  useWindowAsScrollContainer?: boolean,

  infiniteLoadBeginBottomOffset?: number,
  onInfiniteLoad?: () => any,
  loadingSpinnerDelegate?: ReactElement<any, any, any>,

  isInfiniteLoading?: boolean,
  timeScrollStateLastsForAfterUserScrolls?: number,

  className?: string
};

type ReactInfiniteState = {
  numberOfChildren: number,
  infiniteComputer: InfiniteComputer,
  isInfiniteLoading: boolean,
  preloadBatchSize: number,
  preloadAdditionalHeight: number,
  displayIndexStart: number,
  displayIndexEnd: number,
  isScrolling?: boolean,
  scrollTimeout?: any
};