package expo.modules.multiplay

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import android.media.AudioManager
import android.media.MediaPlayer
import android.content.Context

import android.net.Uri


class ExpoMultiplayModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoMultiplay")
   
    Function("hello") {
      return@Function "hello saamm"
    }
    Function("init") {
      val activity = appContext.activityProvider?.currentActivity
      val applicationContext = activity?.applicationContext
      if(applicationContext != null) {
        val audioManager = applicationContext.applicationContext.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, 20, 0)
      }
     
//      Toast.makeText(applicationContext, "init success", Toast.LENGTH_SHORT).show()
      return@Function "init lib success"
    }

    Function("play") { path: String ->
      play(path);
    }

  }
  fun play(path: String) {
    try {
      val activity = appContext.activityProvider?.currentActivity
      val applicationContext = activity?.applicationContext
      if(applicationContext != null) {
        var mediaPlayer: MediaPlayer? = MediaPlayer()
        mediaPlayer?.setAudioStreamType(AudioManager.STREAM_MUSIC)
        mediaPlayer?.setDataSource(
          applicationContext,
            Uri.parse(path)
        );
        mediaPlayer?.prepare();
        mediaPlayer!!.isLooping = true
        mediaPlayer!!.start()
      }

    } catch (e: Exception) {
//            Toast.makeText(this, e.message.toString(), Toast.LENGTH_SHORT).show()
    }
}
 
}
