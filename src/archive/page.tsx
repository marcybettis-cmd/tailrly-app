'"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabaseClient";

export default function Upload() {
  const [chest, setChest] = useState("")
  const [waist, setWaist] = useState("")
  const [hips, setHips] = useState("")

  const saveMeasurements = async () => {
    const { data: userData } = await supabase.auth.getUser()

    await supabase.from("measurements").insert([
      {
        user_id: userData.user?.id,
        chest,
        waist,
        hips,
      },
    ])

    alert("Saved!")
  }

  return (
    <div className="p-10 space-y-4">
      <input placeholder="Chest" onChange={(e)=>setChest(e.target.value)} className="border p-2"/>
      <input placeholder="Waist" onChange={(e)=>setWaist(e.target.value)} className="border p-2"/>
      <input placeholder="Hips" onChange={(e)=>setHips(e.target.value)} className="border p-2"/>
      <button onClick={saveMeasurements} className="bg-black text-white p-2">
        Save Measurements
      </button>
    </div>
  )
}