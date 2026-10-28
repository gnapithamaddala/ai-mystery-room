export const demoCase = {
  id: 'demo-case', demo: true, caseTitle: 'The Last Light at Bellwether',
  description: 'A storm-bound observatory. A missing star chart. Four people with a reason to reach for the sky.',
  scenario: 'The original Bellwether comet chart vanished from the Halcyon Observatory during a storm-night open house. The archive room was locked and its motion alarm went offline for eleven minutes.',
  category: 'theft', difficulty: 'medium', status: 'active', createdAt: new Date().toISOString(),
  incident: { summary: 'The original Bellwether comet chart disappeared from the locked archive during the annual open house.', location: 'Halcyon Observatory, archive wing', incidentTime: '9:12 PM', incidentType: 'Theft' },
  suspects: [
    { id: 's1', name: 'Dr. Mira Sen', role: 'Observatory director', age: 46, biography: 'A precise astronomer who has led Halcyon for twelve years. She approved the evening’s archive tour.', relationship: 'Responsible for the collection and the event.', motive: 'The observatory faces a funding review, and the chart was promised to a private donor.', alibi: 'Says she was addressing guests in the planetarium from 9:00 to 9:20.', knownFacts: ['Keeps a master key for the archive.', 'Insists the chart should remain in Halcyon.'] },
    { id: 's2', name: 'Elias Venn', role: 'Collections conservator', age: 34, biography: 'A careful restorer who catalogued the chart before the event and knows its frame well.', relationship: 'Handled the chart during conservation last month.', motive: 'Has overdue debts and privately asked about the chart’s insurance value.', alibi: 'Says he was in the west lab preparing a humidity check.', knownFacts: ['His gloves were found near the archive door.', 'His lab log has a gap at 9:10.'] },
    { id: 's3', name: 'Nadia Holt', role: 'Volunteer guide', age: 27, biography: 'A former student of the observatory who returned as a volunteer guide for the open house.', relationship: 'Led the public tour beside the archive wing.', motive: 'Believes the observatory concealed her late mentor’s contribution to the chart.', alibi: 'Says she was leading a group on the roof terrace.', knownFacts: ['Knows the service stairwell.', 'A guest remembers her leaving the tour briefly.'] },
    { id: 's4', name: 'Theo Park', role: 'Facilities engineer', age: 51, biography: 'Maintains the observatory’s old alarm and climate systems, including the archive circuit.', relationship: 'Had technical access to the alarm panel.', motive: 'A recent report blamed him for unreliable equipment.', alibi: 'Says he was resetting the generator in the east plant room.', knownFacts: ['The alarm outage was triggered from the local panel.', 'His access badge was used near the archive.'] }
  ],
  timeline: [
    { id:'t1', time:'8:40 PM', title:'Doors open', description:'Guests arrive for the annual open house.' },
    { id:'t2', time:'9:02 PM', title:'Archive tour begins', description:'Nadia leads a small group past the archive viewing window.' },
    { id:'t3', time:'9:08 PM', title:'Alarm circuit drops', description:'The archive motion circuit reports a local service interruption.' },
    { id:'t4', time:'9:12 PM', title:'Chart goes missing', description:'A staff member reports the empty display frame.' },
    { id:'t5', time:'9:19 PM', title:'Alarm restored', description:'The motion circuit returns to service.' }
  ],
  evidence: [
    { id:'e1', type:'document', title:'Archive access sheet', description:'A copy of the evening’s signed key register.', content:'8:52 PM — Mira Sen, master key returned 8:59 PM.\n9:03 PM — No key issued.\n9:16 PM — Theo Park, panel key signed out.', relatedSuspectIds:['s1','s4'] },
    { id:'e2', type:'system_log', title:'Alarm service record', description:'The archive circuit’s maintenance log.', content:'9:08:14 PM — Local bypass enabled at panel A-2.\n9:19:02 PM — Bypass cleared.\nPanel A-2 can only be reached from the east plant corridor.', relatedSuspectIds:['s4'] },
    { id:'e3', type:'witness', title:'Planetarium usher statement', description:'A short interview recorded after the event.', content:'“Dr. Sen was speaking with guests when the chart was reported missing. She had been on stage since the comet presentation began at 9:00.”', relatedSuspectIds:['s1'] },
    { id:'e4', type:'witness', title:'Roof tour attendance', description:'The guide’s sign-in card and a guest recollection.', content:'Nadia checked in six guests at 9:04. One guest recalls she was still pointing out the northern dome at 9:14, though she stepped away once to fetch a coat.', relatedSuspectIds:['s3'] },
    { id:'e5', type:'document', title:'Humidity lab worksheet', description:'Elias’s work notes for the west lab.', content:'9:00 PM — Humidity 48%.\n9:10 PM — Reading not recorded.\n9:20 PM — Humidity 49%.\nThe worksheet is in Elias’s handwriting; the instrument stores no automatic history.', relatedSuspectIds:['s2'] },
    { id:'e6', type:'chat', title:'Staff group messages', description:'Messages exchanged during the alarm interruption.', content:'9:09 PM · Mira: “Is the archive sensor still down?”\n9:10 PM · Theo: “I’m at the east panel. It’s an old relay.”\n9:11 PM · Elias: “I’m staying in the west lab until readings settle.”', relatedSuspectIds:['s1','s2','s4'] },
    { id:'e7', type:'image', title:'Service corridor photograph', description:'A text description of a still image; no image asset is available.', content:'The corridor camera shows a figure in a facilities jacket entering the east plant corridor at 9:06 PM. The face is obscured by an umbrella carried indoors.', relatedSuspectIds:['s4'] },
    { id:'e8', type:'document', title:'Donor correspondence', description:'A printed note found in the event office.', content:'The donor confirms the chart was never promised for transfer. Mira wrote: “The original stays in our archive. We can discuss a reproduction.”', relatedSuspectIds:['s1'] },
    { id:'e9', type:'witness', title:'Night caretaker interview', description:'The caretaker describes the east corridor after the alarm sounded.', content:'“I heard the plant room door close at about 9:17. Theo came out carrying his tool case. He said he had been checking the generator.”', relatedSuspectIds:['s4'] },
    { id:'e10', type:'audio', title:'Coat-room voicemail', description:'Text transcript of a voicemail; no audio recording is available.', content:'Transcript, 9:24 PM — Nadia: “I’m sorry I missed the last part of the tour. I was looking for my blue scarf. It was in the lobby, not the archive wing.”', relatedSuspectIds:['s3'] }
  ],
  hints: [
    'Compare the alarm record with the statements about where people were.',
    'The local bypass requires access to a specific corridor. Check who could reach it during the outage.',
    'Focus on the person who could disable the circuit and explain the time spent near the east plant room.'
  ],
};
