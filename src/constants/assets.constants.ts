// for slides and resources page.
export class AssetsConstants {
  private static readonly ASSET_BASE_URL_NETLIFY = import.meta.env
    .VITE_ASSET_BASE_URL_NETLIFY;

  public static readonly SESSIONS = {
    2025: {},
    2024: {
      ALMLRoadmap: {
        slideURL: `${this.ASSET_BASE_URL_NETLIFY}/session-resources/AIMLRoadmap_JyotiPokhrel/Slides.pdf`,
        resourcesURL: `${this.ASSET_BASE_URL_NETLIFY}/session-resources/AIMLRoadmap_JyotiPokhrel/Resources.docx`,
      },
    },
  };
}
