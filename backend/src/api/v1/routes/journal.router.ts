import express from 'express';
import { journalController as JC } from '../controllers';
import { journalValidation } from '../validation/journal.validation';

const journalRouter = express.Router({ mergeParams: true });

journalRouter.get('/:userId', JC.getUserJournals);
journalRouter.get('/:journalId/:userId', JC.getJournalById);
journalRouter.post('/:userId', journalValidation, JC.addJournal);
journalRouter.delete('/:journalId/:userId', JC.deleteJournalEntry);
journalRouter.put('/:journalId', JC.updateJournal);
journalRouter.get('/:userId/analytics', JC.getJournalAnalytics);

export default journalRouter;
