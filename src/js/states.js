 const PANORAMIC_PROPS = {
    direction: 'column',
    arenaWidth: "100vw",
    arenaHeight: "60vh",
    promptWidthPercentage: null,
    promptHeightPercentage: 0.3,
  } 
 const FULL_PROMPT_PROPS = {
    direction: 'row',
    arenaWidth: "60vw",
    arenaHeight: "93vh",
    promptWidthPercentage: 1,
    promptHeightPercentage: null
  } 
  const FULL_TOOL_PROPS = {
    direction: 'row',
    arenaWidth: "100vw",
    arenaHeight: "93vh",
    promptWidthPercentage: 0.00001,
    promptHeightPercentage: null
  } 
  const PORTRAIT_PROPS = {
    direction: 'row',
    arenaWidth: "60vw",
    arenaHeight: "93vh",
    promptWidthPercentage: 0.35,
    promptHeightPercentage: null
  } 


export const SCREEN_STATES = {
    FULL_PROMPT: FULL_PROMPT_PROPS,
    FULL_TOOL: FULL_TOOL_PROPS,
    PANORAMIC: PANORAMIC_PROPS,
    PORTRAIT: PORTRAIT_PROPS,
  }

export const SCREEN_TYPES = {
    FULL_PROMPT: 'FULL_PROMPT',
    FULL_TOOL: 'FULL_TOOL',
    PANORAMIC: 'PANORAMIC',
    PORTRAIT: 'PORTRAIT',
}