'use strict'

const coverSong = use('App/Models/CoverSing')

class CoverSingController {
  async index ({response}) {
    let songs = await coverSong.all()
    return response.json(songs)
  }
  async store ({request,response}) {
    const songList = request.only(['artist','title','link'])
    const song = new coverSong()
    song.artist = songList.artist
    song.title = songList.title
    if (!songList.link) {
      song.link = "Belum Tersedia"
    } else {
      song.link = songList.link 
    }
    await song.save()
    return response.status(201).json(song)
  }
  async show ({params,response}) {
    const song = await coverSong.find(params.id)
    return response.json(song)
  }
  async update ({params,request,response}) {
    const songSelect = request.only(['artist','title','link'])
    const songId = await coverSong.find(params.id)
    if (!songId) {
      return response.status(404).json({data: 'Resource not found'})
    } else {
      songId.artist = songSelect.artist
      songId.title = songSelect.title
      songId.link = songSelect.link
      await songId.save()
      return response.status(200).json(songId)
    }
  }
  async delete ({params,response}) {
    const songSelect = await coverSong.find(params.id)
    if (!songSelect) {
      return response.status(404).json({data : "Resource not found" })
    } else {
      await songSelect.delete()
      return response.status(200).json({status : "data deleted"})
    }
  }
}

module.exports = CoverSingController
