g1 = Goal.create(more_less: 'more', category: 'exercise', goal_thing: 'gym', is_public: true, icon_url: '')
g2 = Goal.create(more_less: 'more', category: 'exercise', goal_thing: 'running', is_public: true, icon_url: '')
g3 = Goal.create(more_less: 'more', category: 'exercise', goal_thing: 'cycling', is_public: true, icon_url: '')
g4 = Goal.create(more_less: 'more', category: 'exercise', goal_thing: 'walking', is_public: true, icon_url: '')
g5 = Goal.create(more_less: 'more', category: 'drink', goal_thing: 'water', is_public: true, icon_url: '')
g6 = Goal.create(more_less: 'more', category: 'drink', goal_thing: 'juice', is_public: true, icon_url: '')
g7 = Goal.create(more_less: 'more', category: 'food', goal_thing: 'fruit', is_public: true, icon_url: '')
g8 = Goal.create(more_less: 'more', category: 'food', goal_thing: 'vegetables', is_public: true, icon_url: '')
g9 = Goal.create(more_less: 'more', category: 'food', goal_thing: 'salad', is_public: true, icon_url: '')
g10 = Goal.create(more_less: 'more', category: 'practice', goal_thing: 'musical instrument', is_public: true, icon_url: '')
g11 = Goal.create(more_less: 'more', category: 'practice', goal_thing: 'sport', is_public: true, icon_url: '')
g12 = Goal.create(more_less: 'more', category: 'practice', goal_thing: 'martial art', is_public: true, icon_url: '')
g13 = Goal.create(more_less: 'more', category: 'other', goal_thing: 'write', is_public: true, icon_url: '')
g14 = Goal.create(more_less: 'less', category: 'smoking', goal_thing: 'cigarettes', is_public: true, icon_url: '')
g15 = Goal.create(more_less: 'less', category: 'smoking', goal_thing: 'cigars', is_public: true, icon_url: '')
g16 = Goal.create(more_less: 'less', category: 'smoking', goal_thing: 'other', is_public: true, icon_url: '')
g17 = Goal.create(more_less: 'less', category: 'booze', goal_thing: 'all alcohol', is_public: true, icon_url: '')
g18 = Goal.create(more_less: 'less', category: 'booze', goal_thing: 'beer', is_public: true, icon_url: '')
g19 = Goal.create(more_less: 'less', category: 'booze', goal_thing: 'wine', is_public: true, icon_url: '')
g20 = Goal.create(more_less: 'less', category: 'booze', goal_thing: 'spirits', is_public: true, icon_url: '')
g21 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'junk food', is_public: true, icon_url: '')
g22 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'chocolate', is_public: true, icon_url: '')
g23 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'sweets', is_public: true, icon_url: '')
g24 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'chips', is_public: true, icon_url: '')
g25 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'burgers', is_public: true, icon_url: '')
g26 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'pizza', is_public: true, icon_url: '')
g27 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'take-away', is_public: true, icon_url: '')
g28 = Goal.create(more_less: 'less', category: 'food', goal_thing: 'crisps', is_public: true, icon_url: '')
g29 = Goal.create(more_less: 'less', category: 'drink', goal_thing: 'soda', is_public: true, icon_url: '')
g30 = Goal.create(more_less: 'less', category: 'drink', goal_thing: 'sugary drinks', is_public: true, icon_url: '')

u1 = User.create(name: 'Rob Holloway')
u2 = User.create(name: 'Homer Simpson')

e1 = Event.create(user_id: 1, goal_id: 2)
e2 = Event.create(user_id: 1, goal_id: 21)
e3 = Event.create(user_id: 2, goal_id: 1)
e4 = Event.create(user_id: 2, goal_id: 8)
e5 = Event.create(user_id: 2, goal_id: 11)
e6 = Event.create(user_id: 2, goal_id: 18)
e7 = Event.create(user_id: 2, goal_id: 26)
e8 = Event.create(user_id: 2, goal_id: 29)
e9 = Event.create(user_id: 1, goal_id: 2, event_datetime: '2014-04-09T14:09:12.414Z')
e10 = Event.create(user_id: 1, goal_id: 2, event_datetime: '2015-10-09T10:09:12.414Z')
e11 = Event.create(user_id: 1, goal_id: 2, event_datetime: '2015-10-09T11:09:12.414Z')
e12 = Event.create(user_id: 1, goal_id: 2, event_datetime: '2015-11-09T02:09:12.414Z')
e13 = Event.create(user_id: 1, goal_id: 2, event_datetime: '2015-11-09T11:09:12.414Z')
e14 = Event.create(user_id: 1, goal_id: 2, event_datetime: '2015-11-09T16:09:12.414Z')





















