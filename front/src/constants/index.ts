// InputBox 에 해당하는 아이콘에 대한 enum(열거 타입)
export enum INPUT_ICON {
     ON = 'on',
     OFF = 'off',
     ARROW = 'arrow'
}

// 정규식 표현(띄어쓰기 X)
export const eamilPattern = /^[A-Za-z0-9]*@([-.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
export const telnumberPattern = /^[0-9]{10,11}$/;

// Main - pagination
export const COUNT_BY_PAGE = 5;
export const COUNT_BY_PAGE_COMMENT = 3;
export const PAGE_BY_SECTION = 10;
export const COUNT_BY_SECTION = COUNT_BY_PAGE * PAGE_BY_SECTION;
export const COUNT_BY_SECTION_COMMENT = COUNT_BY_PAGE_COMMENT * PAGE_BY_SECTION;