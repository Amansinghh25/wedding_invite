// High-Quality Indian Wedding Audio Engine
// Plays the extracted wedding audio (/audio/wedding-music.mp3) with smooth fade-in/out and looping.

class WeddingSoundtrack {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private fadeInterval: number | null = null;
  private targetVolume: number = 0.65;

  private init() {
    if (!this.audioElement && typeof window !== 'undefined') {
      this.audioElement = new Audio('/audio/wedding-music.mp3');
      this.audioElement.loop = true;
      this.audioElement.volume = 0;
      this.audioElement.preload = 'auto';
    }
  }

  public play() {
    this.init();
    if (!this.audioElement) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    this.isPlaying = true;
    const playPromise = this.audioElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Smooth fade in
          let vol = this.audioElement?.volume || 0;
          this.fadeInterval = window.setInterval(() => {
            if (!this.audioElement) return;
            vol = Math.min(this.targetVolume, vol + 0.05);
            this.audioElement.volume = vol;
            if (vol >= this.targetVolume) {
              if (this.fadeInterval) clearInterval(this.fadeInterval);
              this.fadeInterval = null;
            }
          }, 80);
        })
        .catch(() => {
          // Autoplay was prevented by browser policy until user gesture
          this.isPlaying = false;
        });
    }
  }

  public pause() {
    if (!this.audioElement || !this.isPlaying) return;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    let vol = this.audioElement.volume;
    this.fadeInterval = window.setInterval(() => {
      if (!this.audioElement) return;
      vol = Math.max(0, vol - 0.08);
      this.audioElement.volume = vol;
      if (vol <= 0.01) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        this.audioElement.pause();
        this.isPlaying = false;
      }
    }, 60);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingSoundtrack();
